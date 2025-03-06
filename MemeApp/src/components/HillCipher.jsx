import React, { useState } from "react";

const mod = (n, m) => ((n % m) + m) % m;

// Default 2x2 key matrix for the Hill Cipher
const keyMatrix = [
  [3, 3],
  [2, 5],
];

// Function to find the modular inverse of a number under modulo 26
const modInverse = (a, m) => {
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) return x;
  }
  return 1;
};

// Function to calculate the inverse of a 2x2 matrix under modulo 26
const inverseMatrix = (matrix) => {
  const [a, b] = matrix[0];
  const [c, d] = matrix[1];
  const det = mod(a * d - b * c, 26);
  const invDet = modInverse(det, 26);

  return [
    [mod(d * invDet, 26), mod(-b * invDet, 26)],
    [mod(-c * invDet, 26), mod(a * invDet, 26)],
  ];
};

// Convert a string to a numerical vector based on A=0, B=1, ..., Z=25
const textToVector = (text) =>
  text
    .toUpperCase()
    .split("")
    .map((char) => char.charCodeAt(0) - 65);

// Convert a numerical vector back to a string
const vectorToText = (vector) =>
  vector.map((num) => String.fromCharCode(num + 65)).join("");

// Function to multiply a matrix by a vector modulo 26
const multiplyMatrixVector = (matrix, vector) => {
  return [
    mod(matrix[0][0] * vector[0] + matrix[0][1] * vector[1], 26),
    mod(matrix[1][0] * vector[0] + matrix[1][1] * vector[1], 26),
  ];
};

const HillCipher = () => {
  const [plaintext, setPlaintext] = useState("REENA");
  const [ciphertext, setCiphertext] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const handleEncryption = () => {
    let paddedText = plaintext.toUpperCase();
    if (paddedText.length % 2 !== 0) paddedText += "X";
    const textVectors = textToVector(paddedText.match(/.{1,2}/g).join(""));

    const encryptedVectors = [];
    for (let i = 0; i < textVectors.length; i += 2) {
      encryptedVectors.push(
        ...multiplyMatrixVector(keyMatrix, [textVectors[i], textVectors[i + 1]])
      );
    }
    setCiphertext(vectorToText(encryptedVectors));
  };

  const handleDecryption = () => {
    const invMatrix = inverseMatrix(keyMatrix);
    const cipherVectors = textToVector(ciphertext);

    const decryptedVectors = [];
    for (let i = 0; i < cipherVectors.length; i += 2) {
      decryptedVectors.push(
        ...multiplyMatrixVector(invMatrix, [
          cipherVectors[i],
          cipherVectors[i + 1],
        ])
      );
    }
    setDecryptedText(vectorToText(decryptedVectors));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Hill Cipher Encryption & Decryption
      </h1>
      <div className="mb-4">
        <label className="block mb-2">Plaintext:</label>
        <input
          type="text"
          value={plaintext}
          onChange={(e) => setPlaintext(e.target.value.toUpperCase())}
          className="border p-2 rounded w-full"
        />
      </div>
      <button
        onClick={handleEncryption}
        className="bg-blue-500 text-white p-2 rounded mr-2"
      >
        Encrypt
      </button>
      <button
        onClick={handleDecryption}
        className="bg-green-500 text-white p-2 rounded"
      >
        Decrypt
      </button>
      <div className="mt-4">
        <p className="mb-2">
          <strong>Ciphertext:</strong> {ciphertext}
        </p>
        <p>
          <strong>Decrypted Text:</strong> {decryptedText}
        </p>
      </div>
    </div>
  );
};

export default HillCipher;

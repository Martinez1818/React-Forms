import { useState } from "react";
export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
      setUserName(result.userName);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h2 className="auth-heading">Authenticate</h2>
      {successMessage && <p className="success">{successMessage}</p>}
      {error && <p className="error">{error}</p>}
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
}

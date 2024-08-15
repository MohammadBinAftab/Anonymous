import React, { useState } from 'react';
import Image from './image.jpg';

const CenteredPage = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const webhookURL = "https://discord.com/api/webhooks/1273596604938719264/QJ_QDqwoDKNKYzs1S3syFqGj_xWV4f9QtXAdKseOGzigk5XBvGJNv_aBXu1tKpkUGnys";

    if (message.trim()) {
      const payload = {
        content: message,
        username: "Anonymous",
      };

      try {
        const response = await fetch(webhookURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          alert("Message sent!");
          setMessage(""); 
        } else {
          alert("Failed to send message.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while sending the message.");
      }
    } else {
      alert("Please enter a message.");
    }
  };

  return (
    <div style={styles.container}>
      <img
        src={Image}
        alt="Profile"
        style={styles.image}
      />
      <h1 style={styles.heading}>Hi, I'm MBA</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Send an Anonymous message"
          style={styles.input}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button style={styles.button} onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Montserrat, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#fff',
  },
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
  },
  heading: {
    marginBottom: '15px',
    fontSize: '24px',
    color: '#333',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px 0 0 4px',
    border: '1px solid #ccc',
    outline: 'none',
    width: '200px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#000',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
    marginLeft: '15px'
},
};

export default CenteredPage;

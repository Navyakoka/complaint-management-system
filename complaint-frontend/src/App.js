import React, { useState, useEffect } from "react";

const API_URL = "http://localhost:8080/complaints";

function App() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [complaints, setComplaints] = useState([]);

  const loadComplaints = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setComplaints(data));
  };

  useEffect(() => {
    loadComplaints();
  }, []);

  const submitComplaint = () => {

    const complaint = {
      title: title,
      description: description,
      category: category,
      status: "OPEN"
    };

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(complaint)
    })
    .then(() => {
      alert("Complaint submitted!");
      loadComplaints();
    });

  };

  const deleteComplaint = (id) => {

    fetch(API_URL + "/" + id, {
      method: "DELETE"
    })
    .then(() => loadComplaints());

  };

  const resolveComplaint = (id) => {

    fetch(API_URL + "/" + id + "/status", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: "RESOLVED" })
    })
    .then(() => loadComplaints());

  };

  return (
    <div style={{
  padding: "40px",
  fontFamily: "Arial",
  maxWidth: "600px",
  margin: "auto"
}}>

      <h1>Complaint Management System</h1>

      <h2>Submit Complaint</h2>

      <input placeholder="Title"
        onChange={(e) => setTitle(e.target.value)} />

      <br/><br/>

      <input placeholder="Description"
        onChange={(e) => setDescription(e.target.value)} />

      <br/><br/>

      <input placeholder="Category"
        onChange={(e) => setCategory(e.target.value)} />

      <br/><br/>

      <button onClick={submitComplaint}>Submit Complaint</button>

      <hr/>

      <h2>All Complaints</h2>

      <button onClick={loadComplaints}>Load Complaints</button>

      <ul>
        {complaints.map(c => (
          <li key={c.id}>
           {c.title} - 
<span style={{ color: c.status === "OPEN" ? "red" : "green" }}>
  {c.status}
</span>

            <button
  disabled={c.status === "RESOLVED"}
  onClick={() => resolveComplaint(c.id)}
>
  Resolve
</button>

            <button onClick={() => deleteComplaint(c.id)}>
              Delete
            </button>

          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
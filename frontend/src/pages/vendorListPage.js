
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

const VendorList = () => {
  const [vendors, setVendors] = useState([]);
console.log(vendors)
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
  const chunks = chunkArray(vendors, 3);

  useEffect(() => {
    axios.get("https://nuturemite-1.onrender.com/api/getvendors")
      .then((res) => {
        const vendorUsers = res.data.users.filter(user => user.type === "vendor");
        setVendors(vendorUsers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (vendorId) => {
    axios.delete(`https://nuturemite-1.onrender.com/api/getvendors/${vendorId}`)
      .then((res) => {
        // console.log(res);
        alert("Do you want to delete the vendor")
        setVendors(prevVendors => prevVendors.filter(vendor => vendor._id !== vendorId));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {chunks.map((chunk, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#E6ECF2",
            backgroundSize: "cover",
            height: "600px",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          {chunk.map((vendor) => (
            <Link to={`/vendors/${vendor._id}`} key={vendor._id}>
              <Card
                style={{
                  width: "18rem",
                  display: "inline-flex",
                  height: "370px",
                  margin: "8px",
                  boxShadow: "1px 1px 9px 7px #CAC5C3",
                  border: "none",
                }}
              >
                <Card.Img
                  variant="top"
                  style={{
                    height: "140px",
                    width: "140px",
                    marginLeft: "15%",
                    marginTop: "10%",
                    borderRadius: "50%",
                  }}
                  src="https://secure.gravatar.com/avatar/8e051f27bc681a698a8572f5b3fae354?s=96&d=mm&r=g"
                />
                <br></br>

                <Card.Body>
                  <Card.Title>{vendor.name}</Card.Title>
                  <Card.Text>Role: {vendor.type}</Card.Text>
                  <Card.Text>ID: {vendor._id}</Card.Text>
                  <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <Button
                      style={{ border: "none", color: "#4A72A2", fontWeight: "bold" }}
                      variant="outline-primary"
                    >
                      {vendor.vendornumber}
                    </Button>
                    <Button
                      variant="danger"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete(vendor._id);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default VendorList;
import React from "react";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const userData = data.user;
        setUser({
          username: userData.username || "",
          email: userData.email || "",
          password: userData.password || "",
        });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  const handleSubmit = async (e: ReactDOM.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setFormData({ username: "", email: "", password: "" });
      router.push(`/user/${id}`);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  // Handle account deletion
  const onDeleteClick = async () => {
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "DELETE", // Assuming this deletes the user account
      });
      if (!response.ok) throw new Error("Network response was not ok");
      router.push("/users"); // Redirect to the list of users or the home page
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <button type="submit">Update Profile</button>
      </form>

      <button onClick={onDeleteClick}>Delete Account</button>
    </div>
  );
};

export default User;

interface UserProps {
  user: {
    id: number;
    username: string;
    email: string;
    password: string;
  };
}

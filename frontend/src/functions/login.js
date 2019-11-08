import { post } from "axios";

async function createUser(email, name) {
  let user = await post("http://localhost:8181/api/user/", {
    email,
    name
  }).then(res => {
    localStorage.setItem("userId", res.data.user.id);
    return res;
  });
  console.log("useeeeeeeeer", user);
  return user;
}

export { createUser };

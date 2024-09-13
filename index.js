const express = require("express");
const app = express();

const users = [
  {
    name: "John",
    kidney: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const johnKidney = users[0].kidney;
  const number_of_kidneys = johnKidney.length;
  let number_of_healthy_kidneys = 0;

  for (let i = 0; i < johnKidney.length; i++) {
    if (johnKidney[i].healthy) {
      number_of_healthy_kidneys = number_of_healthy_kidneys + 1;
    }
  }

  const number_of_unhealthy_kidneys =
    number_of_kidneys - number_of_healthy_kidneys;

  res.json({
    number_of_kidneys,
    number_of_healthy_kidneys,
    number_of_unhealthy_kidneys,
  });
});

app.post("/", function (req, res) {
  const ishealthy = req.body.ishealthy;

  users[0].kidney.push({
    healthy: ishealthy,
  });

  res.json({
    msg: "Done!",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidney.length; i++) {
    users[0].kidney[i].healthy = true;
  }

  res.json({ msg: "All kidneys updated to healthy." });
});

app.delete("/", function (req, res) {
  const newkidneys = [];
  for (let i = 0; i < users[0].kidney.length; i++) {
    if (users[0].kidney[i].healthy) {
      newkidneys.push(users[0].kidney[i]);
    }
  }

  users[0].kidney = newkidneys;
  console.log("Kidneys updated after DELETE request");

  res.json({ msg: "Unhealthy kidneys removed." });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

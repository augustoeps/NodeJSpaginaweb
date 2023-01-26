import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index",{title:"First website"});
});

router.get("/about", (req, res) => {
  res.render("about",{title:"about me"});
});

router.get("/contact", (req, res) => {
  res.render("contact",{title: "Contact me"});
});

export default router;

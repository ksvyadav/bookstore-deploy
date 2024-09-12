import Contact from "../model/contact.model.js";


export const contact = async (req, res) => {
  try {
    const { fullname, email, message } = req.body;
    
    const createdMessage = new Contact({
      fullname: fullname,
      email: email,
      message: message,
    });
    await createdMessage.save();
    await res.status(201).json({
      message: "Your message has been saved successfully",
    });
  } catch (error) {
    console.error("Error:" + error.message);
    res.status(500).json({ mesage: "internal server error" });
  }
};


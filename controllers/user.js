const userController = {
  getAll: (req, res, next) => {
    return res.status(200).json({ sucesso: true, message: "Deu certo" });
  },
  getById: (req, res, next) => {
    const { id } = req.params;
    return res.status(200).json({ sucesso: true, message: `Deu certo ${id}` });
  },
  createUser: (req, res, next) => {
    const { firstName, lastName, email, userType } = req.body;

    let errors = {};
    let errorMessage = "";
    let isBodyValid = true;

    if (!firstName || typeof firstName !== "string" || firstName.trim().length === 0) {
      isBodyValid = false;
      errors["firstName"] = "This should be a string";
    }

    if (!lastName || typeof lastName !== "string" || lastName.trim().length === 0) {
      isBodyValid = false;
      errors["lastName"] = "This should be a string and not empty";
    } 

    if (!email || typeof email !== "string" || email.trim().length === 0) {
        isBodyValid = false;
        errors["email"] = "This should be a string and not empty";
    } 

    if (!userType || typeof userType !== "string" || userType.trim().length === 0) {
        isBodyValid = false;
        errors["userType"] = "This should be a string and not empty";
    }else{
        const checks = ["admin", "user", "support"]
        const found = checks.some(check => check === userType)
        if(!found){
            isBodyValid = false
            errors["userType"] = "This should be a string and can have these values " + checks.join(',');
        }
    }

    if (!isBodyValid) {
      return res.status(400).json({
        sucesso: isBodyValid,
        errorMessage: "Kindly correct the error(s)",
        errors: errors,
      });
    }

    // Só executa depois das validacoes
    const userPayload = {
      email,
      userType,
      firstName,
      lastName,
    };

    return res
      .status(200)
      .json({
        sucesso: true,
        message: `Deu certo ${email}`,
        data: userPayload,
      });
  },
  updateUser: (req, res, next) => {},
  deleteUser: (req, res, next) => {},
};

module.exports = userController;

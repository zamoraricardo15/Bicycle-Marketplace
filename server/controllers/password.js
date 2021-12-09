const errors = []
module.exports = {


    checkRequirements(password){


        errors.length = 0;


        const lowerCase = password.search(/[a-z]/)

        const numbers = password.search(/[0-9]/)

        const upperCase = password.search(/[A-Z]/)
        const length = password.length

        if (lowerCase < 0 || numbers < 0 || upperCase < 0 ) {

            errors.push()
        }
        if ( length < 10 ) {

            errors.push()
        }
        if (errors.length > 0) {

          return errors
        }
        return false
    },
    encryptPassword(password) {

            return bcrypt.hash(password, 10)
    },
    checkPassword(password) {
        bcrypt.compare(password, savedPassword)

        
        
    }
}

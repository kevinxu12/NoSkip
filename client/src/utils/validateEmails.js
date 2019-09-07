const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const validateEmails = (emails) => {
    const invalidEmailList = emails
    .split(',')
    .map(email => { return email.trim() })
    .filter(email => re.test(email) === false);
    if(invalidEmailList.length) {
        return "the following emails are invalid " + invalidEmailList;
    }
    return null;
};

export default validateEmails;
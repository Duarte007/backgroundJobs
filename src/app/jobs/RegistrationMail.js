import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    options: {
        attemps: 3
    },
    async handle({data}){
        const {user} = data;
        Mail.sendMail({
            from: 'Queue <teste@teste.com>',
            to: `${user.name} <${user.email}>`,
            subject: "Email Test",
            html: `Olá ${user.name}! Email de teste funcionando.`
        });
    }
}
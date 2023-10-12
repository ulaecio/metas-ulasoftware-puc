import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { requestBackendLogin } from 'utils/request';
import { /*getAuthData,*/ saveAuthData } from 'utils/storage';
import ButtonIcon from '../../../components/ButtonIcon';
import './styles.css';

type FormData = {
    username: string;
    password: string;
}

type LocationState = {
    from: string;
}

const Login = () => {
    const [hasError, setHasError] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const history = useHistory();

    let location = useLocation<LocationState>();

    const { from } = location.state || { from: { pathname: '/admin' } };

    const onSubmit = (formData: FormData) => {
        requestBackendLogin(formData)
            .then(response => {
                saveAuthData(response.data)
                // const tokenData = getAuthData(),
                setHasError(false);
                // console.log('SUCESSO', response);
                history.replace(from);
            })
            .catch(error => {
                setHasError(true)
                //console.log('ERRO', error);
            });
    };
    return (
        <div className='container-login'>
            <div className=' base-card text-center align-items-center'>
                <h1 className='text-primary text-center display-flex'>
                    Entrar</h1>
                {hasError && (
                    < div className='alert alert-danger mb-2'>
                        Usuário ou senha inválido!
                    </div>
                )
                }
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <input
                            {...register('username', {
                                required: '*Campo obrigatório'
                            })}
                            type='text'
                            className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
                            placeholder='Usuário Exemplo: Ulaecio'
                            name='username'
                        />
                        <div className='invalid-feedback d-block'>{errors.username?.message}</div>
                    </div>
                    <div className='mb-2'>
                        <input
                            {...register('password', {
                                required: '*Campo obrigatório'
                            })}
                            type='password'
                            className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
                            placeholder='Senha. Exemplo: 123456'
                            name='password'
                        />
                        <span className='not-registered text-secondary text-info-senha'>
                            <i>*A senha é formada por numeros</i>.</span>
                        <div className='invalid-feedback d-block'>{errors.password?.message}</div>
                        <div>
                            <link>
                            </link>
                            <div className='login-submit'>
                                <ButtonIcon text='Fazer login' />
                                <span className='not-registered'>Não tem cadastro?
                                    {/* <a href="https://api.whatsapp.com/send?phone=+559891076037&text=Ol%C3%A1!%20N%C3%A3o%20consigo%20acessar%20minha%20rota%20no%20*Farol%20de%20Vendas*" target=''>Clique aqui</a> */}</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default Login;
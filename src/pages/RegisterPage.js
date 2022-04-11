import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { AuthContext } from '../auth/AuthContext'

export const RegisterPage = () => {

	const {register} = useContext(AuthContext);

	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
	});

	const onChange = ({target}) =>  {
		const {name, value} = target;
		setForm({
			...form,
			[name]:value
		})
	}

	const onSubmit = async (e) => {
		e.preventDefault();

		const {name, email, password} = form;

		const resp = await register(name, email, password);

		console.log({resp});

		if(typeof resp === 'boolean') return;

		if(typeof resp === 'string'){
			return Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: resp,
			})
		}
	}

	const checkFields = () => {
		return (form.email.length > 0  && form.password.length > 0 && form.name.length > 0) ? true : false;
	}

  return (
    <form 
		className="login100-form validate-form flex-sb flex-w"
		onSubmit= {onSubmit}
	>
					<span className="login100-form-title mb-3">
						Chat - Registro
					</span>

					<div className="wrap-input100 validate-input mb-3">
						<input 
							className="input100" 
							type="text" 
							name="name" 
							placeholder="Nombre" 
							onChange={onChange}
						/>
						<span className="focus-input100"></span>
					</div>

					
					<div className="wrap-input100 validate-input mb-3">
						<input 
							className="input100" 
							type="email" 
							name="email" 
							placeholder="Email" 
							onChange={onChange}
						/>
						<span className="focus-input100"></span>
					</div>
					
					
					<div className="wrap-input100 validate-input mb-3">
						<input 
							className="input100" 
							type="password" 
							name="password" 
							placeholder="Password" 
							onChange={onChange}
						/>
						<span className="focus-input100"></span>
					</div>
					
					<div className="row mb-3">
						<div className="col text-right">
							<Link to="/auth/login" className="txt1">
								Ya tienes cuenta?
              </Link>
						</div>
					</div>

					<div className="container-login100-form-btn m-t-17">
						<button 
							type='submit'
							className="login100-form-btn"
							disabled={!checkFields()}
						>
							Crear cuenta
						</button>
					</div>

		</form>
  )
}

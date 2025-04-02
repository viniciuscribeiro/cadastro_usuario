import './style.css'
import trashIcon from '../../assets/excluir.png';
import api from '../../services/api';
import { useEffect, useState, useRef } from 'react'; 



function Home() {
  const [ users, setUsers ] = useState([])

  // pegando os valores dos inputs, (temq  botar ref no input)
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getUsers(){
    const usersFromApi = await api.get('/usuarios') 
    setUsers(usersFromApi.data); // guardando somente os data
  }

  async function createUsers(){
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })     

    getUsers();
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`) // deleta o usuario 
    
    getUsers();
  }

  useEffect(() => { // sempre executa assim q a minha pagina abrir
    getUsers();
  }, [])

  return (
    <div className='container'>
      <form method="post">
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name='name' type="text" ref={inputName}/>
        <input placeholder='Idade' name='age' type="number" ref={inputAge}/>
        <input placeholder='Email' name='email' type="email" ref={inputEmail}/>
        <button type="button" onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>

          <button onClick={() => deleteUsers(user.id)}>
            <img src={trashIcon} alt="Excluir" width="24" height="24" />
          </button>
        </div>

      ))}

    </div>
  )
}

export default Home

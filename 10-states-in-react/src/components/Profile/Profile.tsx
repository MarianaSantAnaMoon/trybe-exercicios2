import { useState } from 'react';
import './Profile.css';
import { BsFillBellFill, BsFillBellSlashFill } from 'react-icons/bs';
import Swal from 'sweetalert2';

export type ProfileProps = {
  name: string;
  image: string;
  description: string;
};

function Profile({ name, image, description }: ProfileProps) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<ProfileProps>({
    name,
    image,
    description,
  });

  const validName = formData.name.length > 2;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Swal.fire({
      title: 'Salvo com sucesso.',
      icon: 'success',
      text: 'As informações foram salvas!',
    }).then((result) => {
      if (result.isConfirmed) {
        // voltar para as informacoes
        setIsEditing(false);
      }
    });
  };
  return (
    <div className="profile-container">
      {isEditing ? (
        <form onSubmit={ handleSubmit }>
          <div className="form__input">
            <label htmlFor="name">Nome</label>
            <input
              value={ formData.name }
              type="text"
              id="name"
              placeholder="nome exibido no perfil"
              onChange={ (e) => setFormData({ ...formData, name: e.target.value }) }
            />
          </div>

          <div className="form__input">
            <label htmlFor="image">Imagem</label>
            <input
              value={ formData.image }
              type="text"
              id="image"
              placeholder="url da imagem de perfil"
              onChange={ (e) => setFormData({ ...formData, image: e.target.value }) }
            />
          </div>

          <div className="form__input">
            <label htmlFor="description">Descrição</label>
            <textarea
              value={ formData.description }
              id="description"
              placeholder="breve descrição para o perfil"
              onChange={ (e) => setFormData(
                { ...formData, description: e.target.value },
              ) }
            />
          </div>

          <div className="profile-actions">
            <button
              className="profile-actions__button"
              onClick={ () => setIsEditing((prev) => !prev) }
            >
              Voltar
            </button>
            <button className="profile-actions__button" disabled={ !validName }>
              Salvar
            </button>
          </div>
        </form>
      ) : (
        <div className="profile-info">
          <img src={ formData.image } alt="" />
          <h1>{formData.name}</h1>
          <p>{formData.description}</p>
          <div className="profile-actions">
            <button
              className="profile-actions__button"
              onClick={ () => setIsEditing((prev) => !prev) }
            >
              Editar
            </button>
            <button
              className="profile-actions__button"
              onClick={ () => setIsSubscribed((prev) => !prev) }
            >
              {isSubscribed ? (
                <>
                  <BsFillBellSlashFill />
                  Cancelar Inscrição
                </>
              ) : (
                <>
                  <BsFillBellFill />
                  Inscrever-se
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;

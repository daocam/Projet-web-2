import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {FormattedMessage} from 'react-intl';
import {URL} from "../../constantes";

const Inscription = () => {

      const [courriel,setCourriel] = useState('');
      const [nomDeUtilisateur,setNomDeUtilisateur] = useState('');
      const [motDePasse,setMotDePasse] = useState('');

      const surSoumettre = (e) => {
         e.preventDefault();
         let donneesUtilisateur = {}
         donneesUtilisateur.name = nomDeUtilisateur
         donneesUtilisateur.email = courriel
         donneesUtilisateur.password = motDePasse

        axios({
            method: 'post',
            url: `${URL}/api/v1/register`,
            data: donneesUtilisateur,
        })
            .then(res => {
                console.log(res.data);
            })
      }


    return (
        <form className='form px-5 border-opacity-25 rounded' style={{ marginTop: '15vh'}} onSubmit={surSoumettre}>
            <h1 className='title-form font-weight-bold text-center m-4 p-3'><FormattedMessage id="register.form_titre"/></h1>
                    <div className="mb-3">
                        <label htmlFor="courriel" className="form-label"><FormattedMessage id="register.form_courriel"/></label>
                        <input
                            type="email"
                            name="courriel"
                            className="form-control"
                            onChange={(e) => setCourriel(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nom" className="form-label"><FormattedMessage id="register.form_nom_utilisateur"/></label>
                        <input
                            type="text"
                            name="nom"
                            className="form-control"
                            onChange={(e) => setNomDeUtilisateur(e.target.value)}
                            />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mot-de-passe" className="form-label"><FormattedMessage id="register.form_mot_de_passe"/></label>
                        <input
                            type="password"
                            name="mot_de_passe"
                            className="form-control"
                            onChange={(e) => setMotDePasse(e.target.value)}
                            />
                    </div>

                    <div className="mb-3 ">
                        <button type="submit" className="btn btn-primary"><FormattedMessage id="register.form_bt_inscrire"/></button>
                        <Link className='btn btn-primary m-3' to='/'><FormattedMessage id="register.form_bt_retour"/></Link>
                    </div>
            </form>
    );
}

export default Inscription;

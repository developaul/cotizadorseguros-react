import React, { useState } from 'react';
import { 
	Header,
	Formulario,
	Spinner,
	Resumen,
	Resultado
} from './components';
import styled from '@emotion/styled';

const Contenedor = styled.div`
	max-width: 600px;
	margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
	background-color: #FFFFFF;
	padding: 3rem;
`;

function App() {
	const [ resumen, guardarResumen ] = useState( {
		cotizacion: 0,
		datos: {
			marca: '',
			year: '',
			plan: ''
		}
	});

	const [ cargando, guardarCargando ] = useState( false ),
		  { cotizacion, datos } 		= resumen;

	return (
		<Contenedor>
			<Header
				titulo='Cotizador de Seguros'
			/>

			<ContenedorFormulario>
				<Formulario 
					guardarCargando={ guardarCargando }
					guardarResumen={ guardarResumen }
				/>

				{ cargando ? <Spinner /> : null }

				{ !cargando ?
						<>
							<Resumen
								datos={ datos }
							/>

							<Resultado
								cotizacion={ cotizacion }
							/>
						</>
					:
						null
				}
			</ContenedorFormulario>
		</Contenedor>
  	);
};

export default App;
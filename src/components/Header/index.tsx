import * as C from './styles'
import { useForm } from '../../contexts/ThemeContext'
import { themeActions } from '../../contexts/ThemeContext'

export const Header = () => {
    const { state, dispatch } = useForm()

    const handleChangeTheme = () => {
        dispatch({
            type: themeActions.setTheme,
            payload: state.theme === 'light' ? 'dark' : 'light'
        })
    }
    
    return (
        <C.Header theme={state.theme}>
            <div className='container'>
                <h1>onde no mundo?</h1>
                <p onClick={handleChangeTheme}>modo escuro/tela escura</p>
            </div>
        </C.Header>
    )
}
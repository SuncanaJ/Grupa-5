import * as React from 'react';
import Box from '/Mycategories/Imena.jsx';


export default function CheckboxesGroup() {
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (name) => {
        setState({
            ...state,
            [name.target.name]: name.target.checked,
        });
    };

    const { Suncana, Maria, Niko, Marko, Daniel, Lana, Janko, Mia, Valentina, An } = state;


    return (
        Box sx = {
            { display: 'flex' }
        }


        Box >
        FormControl sx = {
            { m: 3 }
        }
        component = "fieldset"
        variant = "standard" >
        <

        FormControlLabel control = { <
            Checkbox checked = { Suncana }
        }
        onChange = { handleChange }
        name = "Suncana" / >
    )
    label = "Suncana" /
        >
        <
        FormControlLabel
    control = { <
        Checkbox checked = { Maria }
        onChange = { handleChange }
        name = "Maria" / >
    }
    label = "Maria" /
        >
        <
        FormControlLabel
    control = { <
        Checkbox checked = { Niko }
        onChange = { handleChange }
        name = "Niko" / >
    }
    label = "Niko" /
        >
        <
        e
    required
    error = { error }
    component = "fieldset"
    sx = {
        { m: 3 }
    }
    variant = "standard" >
        <
        FormControlLabel
    control = { <
        Checkbox checked = { Ana }
        onChange = { handleChange }
        name = "Ana" / >
    }
    label = "Ana" /
        >
        <
        FormControlLabel
    control = { <
        Checkbox checked = { Lana }
        onChange = { handleChange }
        name = "Lana" / >
    }
    label = "Lana" /
        >
        <
        FormControlLabel
    control = { <
        Checkbox checked = { Mia }
        onChange = { handleChange }
        name = "Mia" / >
    }
    label = "Mia" /
        >
        <

}
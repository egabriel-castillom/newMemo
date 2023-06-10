function modCssRow(C,D){
    // Accede a la primera hoja de estilos en el documento
    let stylesheet = document.styleSheets[0];

    // Accede a la lista de reglas CSS en la hoja de estilos
    let rules = stylesheet.cssRules;

    // Busca la regla CSS que deseas modificar
    let rule;
    for (let i = 0; i < rules.length; i++) {
        if (rules[i].selectorText === C) {
            rule = rules[i];
            break;
        }
    }

    // Modifica las propiedades de la regla CSS
    if (rule) {
        rule.style.gridTemplateRows = D;
    }
};

function modCssColumn(C,D){
    // Accede a la primera hoja de estilos en el documento
    let stylesheet = document.styleSheets[0];

    // Accede a la lista de reglas CSS en la hoja de estilos
    let rules = stylesheet.cssRules;

    // Busca la regla CSS que deseas modificar
    let rule;
    for (let i = 0; i < rules.length; i++) {
        if (rules[i].selectorText === C) {
            rule = rules[i];
            break;
        }
    }

    // Modifica las propiedades de la regla CSS
    if (rule) {
        rule.style.gridTemplateColumns = D;
    }
};

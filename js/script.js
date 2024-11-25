const elements = [
    '1;1;gender;SELECT;Male,Female',
    '2;1;firstName;TEXT_INPUT;Enter your first name',
]

function createDrawerElement(inputs) {
    const container = document.querySelector('.drawer-element');
    container.style.gridTemplateColumns = "repeat(2, 1fr)";

    inputs.forEach((line) => {
        const [row, col, label, type, options] = line.split(";");

        const elementWrapper = document.createElement("div");
        elementWrapper.style.gridRow = row;
        elementWrapper.style.gridColumn = col;
        elementWrapper.style.display = "flex";
        elementWrapper.style.gap = "10px";

        const labelElement = document.createElement("label");
        labelElement.textContent = label;
        elementWrapper.appendChild(labelElement);

        if (type === 'SELECT') {
            const select = document.createElement('select');
            options.split(',').forEach((option) => {
                const optionElement = document.createElement('option');
                optionElement.textContent = option;
                select.appendChild(optionElement);
            })
            elementWrapper.appendChild(select);
        } else if (type === 'TEXT_INPUT') {
            const inputElement = document.createElement('input');
            inputElement.placeholder = options;
            inputElement.type = 'text';
            elementWrapper.appendChild(inputElement);
        }

        // ================= ANOTHER METHOD =================

        // switch (type) {
        //     case "SELECT":
        //         const select = document.createElement('select');
        //         options.split(',').forEach((option) => {
        //             const optionElement = document.createElement('option');
        //             optionElement.textContent = option;
        //             select.appendChild(optionElement);
        //         });
        //         elementWrapper.appendChild(select);
        //         break;
        //     case "TEXT_INPUT":
        //         const inputElement = document.createElement('input');
        //         inputElement.placeholder = options;
        //         inputElement.type = 'text';
        //         elementWrapper.appendChild(inputElement);
        //         break;
        // }

        container.appendChild(elementWrapper)
    })
}

createDrawerElement(elements)
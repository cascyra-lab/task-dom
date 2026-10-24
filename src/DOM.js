export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const element = document.createElement(tag);
        element.textContent = content;
        document.body.appendChild(element);
    }
}

export function generateTree(childrenCount, level) {
    function createNode(currentLevel) {
        const div = document.createElement('div');
        div.className = `item_${currentLevel}`;

        if (currentLevel < level) {
            for (let i = 0; i < childrenCount; i++) {
                div.appendChild(createNode(currentLevel + 1));
            }
        }

        return div;
    }

    return createNode(1);
}

export function replaceNodes() {
    const tree = generateTree(2, 3);
    const items = tree.querySelectorAll('.item_2');

    items.forEach((item) => {
        const section = document.createElement('section');
        section.className = item.className;
        while (item.firstChild) {
            section.appendChild(item.firstChild);
        }
        item.parentNode.replaceChild(section, item);
    });

    return tree;
}

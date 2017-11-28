
const draw = (obj, parent = document.body) => {
    if (obj.name) {
        const text = document.createTextNode(obj.name);
        const element = (parent === document.body) ? document.createElement('h1') : document.createElement('li');
        parent.append(element);
        element.append(text);
    
      if (obj.skills && obj.skills.length > 0) {
        
          const ul = document.createElement('ul');
          parent.append(ul);
          obj.skills.map(skill => draw(skill, ul));
      }
    }
}

const tree = document.body;
tree.addEventListener('click', (e) => {
    const target = e.target;
    if (target.nextSibling && target.nextSibling.tagName === 'UL') {
        target.nextSibling.classList.toggle('hidden');
    }
});


const draw = (obj, parent = document.body) => {
    if (obj.name) {
        const text = document.createTextNode(obj.name);
        const element = (parent === document.body) ? document.createElement('h1') : document.createElement('li');
        parent.append(element);
        element.append(text);
    
      if (obj.skills && obj.skills.length > 0) {
        
          const ul = document.createElement('ul');
          parent.append(ul);
          
          element.addEventListener('click', () => {
            const nextNode = element.nextSibling;
            nextNode.classList.toggle('hidden');
          });
          obj.skills.map(skill => draw(skill, ul));
      }
    }
}

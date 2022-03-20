var projectList = [{
    id: 0,
    category: 'web design',
    img: './Images/webpreview.png',
    title: 'personal portfolio',
    tools: 'HTML5, CSS3, Bootstrap, Vanilla Js, React',
    url: '#home'

}, {
    id: 1,
    category: 'UI/UX design',
    img: './Images/webpreview.png',
    title: 'personal portfolio',
    tools: 'Adobe XD',
    url: 'https://www.behance.net/gallery/105612317/Portfolio-Site-UI'
}, {
    id: 2,
    category: 'Graphic Design',
    img: './Images/matalan.png',
    title: 'Branding - Matalan Foods',
    tools: 'Photoshop, CorelDRAW',
    url: ''
}, {
    id: 3,
    category: 'Graphic Design',
    img: './Images/DOV.jpg',
    title: 'NFT Collaboration',
    tools: 'Photoshop, Cinema4d,Blender',
    url: ''
}, {
    id: 4,
    category: 'Graphic Design',
    img: './Images/VI.jpg',
    title: 'NFT Collaboration',
    tools: 'Photoshop, Cinema4d,Blender',
    url: ''
}, {
    id: 5,
    category: 'Graphic Design',
    img: './Images/gele.jpg',
    title: 'Brand Logo',
    tools: 'CorelDRAW',
    url: ''
}, {
    id: 6,
    category: 'Graphic Design',
    img: './Images/Loeda.jpg',
    title: 'Brand Identity',
    tools: 'CorelDRAW, photoshop',
    url: 'https://www.behance.net/gallery/105743645/LOEDA-BLACK'
}];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = projectList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var project = _step.value;

        if (!project.url) {
            project.url = 'javascript:void(0)';
        }
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}
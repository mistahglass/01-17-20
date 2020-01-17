AFRAME.registerComponent('create-cow-component', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#createSound');

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            //object clicked - lets create a cow!
            Context_AF.createCow();

            Context_AF.soundElem.components['sound'].stopSound(); //stop first so we aren't trying to play more than once at same time
            Context_AF.soundElem.components['sound'].playSound();
        });

        Context_AF.el.addEventListener('mouseenter', function(event) {
            //increase scale
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            //decrease scale
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
        });
    },
    createCow : function() {
        const Context_AF = this;

        //create element, than add attributes you want. If you are creating many =you want to 
        //consider "pooling" elements (i.e. not creating/deleting a bunch but just hiding/showing a certain MAX amount with visibility="true" or "false" )
        //see here: https://www.html5rocks.com/en/tutorials/speed/static-mem-pools/ 
        //see here: https://aframe.io/docs/0.8.0/components/pool.html
        let cowElem = document.createElement('a-entity');
        cowElem.setAttribute('class', 'clickable');
        cowElem.setAttribute('obj-model', {obj:'/assets/models/Cow.obj'});
        cowElem.setAttribute('material', {src:'/assets/textures/Cow.png'});
        cowElem.setAttribute('remove-component', {}); 
        cowElem.setAttribute('position', {x:(Math.random() * 6.0) - 3.0, y:0, z:-4.0 - (Math.random() * 3.0)});

        const randScale = 0.2 + (Math.random() * 0.8);
        cowElem.setAttribute('scale', {x:randScale, y:randScale, z:randScale});
        cowElem.setAttribute('rotation', {x:0.0, y:Math.random() * 360.0, z:0.0});
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(cowElem);
    }
});
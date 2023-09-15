const variants = {
    toRightVariant: {
        visible: { 
            opacity: 1, 
            scale: 1, 
            x: 0, 
            transition: {
                duration : 0.8
            } 
        },
        hidden: { 
            opacity: 0, 
            scale: 0, 
            x: -500 
        },
    },
    toLeftVariant: {
        visible: { 
            opacity: 1, 
            scale: 1, 
            x: 0, 
            transition: {
                duration : 0.8
            } 
        },
        hidden: { 
            opacity: 0, 
            scale: 0, 
            x: 500 
        },
    },
    toBottomVariant: {
        visible: {
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            }    
        },
        hidden: {
            opacity: 0, 
            y: -100,    
        },
    },
    toTopVariant: {
        visible: {
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            }    
        },
        hidden: {
            opacity: 0, 
            y: 100,    
        },
    },
    scaleUpVariant: {
        visible: {
            scale: 1,
            transition: {
                duration: 1
            }  
        },
        hidden: {
            scale: 0.5,
        }
    }
}

export default variants;
cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        label1: {
            default: null,
            type: cc.Label
        },
        button: {
            default: null,
            type: cc.Button
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello Creator!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
    },

    // called every frame
    update: function (dt) {

    },

    onClick:function(){
        this.label1.string = 'OnClicked';

        var newEventHandler = new cc.Component.newEventHandler();
        newEventHandler.target = this.node;
        newEventHandler.Component = "HelloWorld";
        newEventHandler.handler = "onScroll";
        newEventHandler.customEventData = "onClick";
        button.clickEvents.push(newEventHandler);
    },

    onScroll:function(){
        this.label1.string = 'Release';

        var newEventHandler = new cc.Component.newEventHandler();
        newEventHandler.target = this.node;
        newEventHandler.Component = "HelloWorld";
        newEventHandler.handler = "onClick";
        newEventHandler.customEventData = "onScroll";
        button.clickEvents.push(newEventHandler);
    },
    loadMap: function () { }
});

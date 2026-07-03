var dom = fl.getDocumentDOM(); 
var timeline = dom.getTimeline(); 
var selectedFrames = timeline.getSelectedFrames();
var selectedFramesLength = selectedFrames[2] - selectedFrames[1];

if (selectedFramesLength > 1) { 
    fl.getDocumentDOM().getTimeline().convertToKeyframes();  
    fl.getDocumentDOM().getTimeline().setFrameProperty('tweenType', 'none');  
}; 

var currentFrame = selectedFrames[1];
for (var i = 0; i < selectedFramesLength; i++) { 
    var selectedLayerIndex = timeline.currentLayer;  
    var selectedLayer = timeline.layers[selectedLayerIndex];  
    timeline.setSelectedFrames(currentFrame, currentFrame, selectedLayer);  

    if (dom.selection.length > 0) {
		for (j = 0; j < dom.selection.length; j++) {
			dom.selection[j].x = Math.round(dom.selection[j].x);
			dom.selection[j].y = Math.round(dom.selection[j].y);
			dom.selection[j].width = Math.round(dom.selection[j].width);
			dom.selection[j].height = Math.round(dom.selection[j].height);
		}
	}

    currentFrame++;
};

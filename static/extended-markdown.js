$('document').ready(function() {
	require(['composer', 'composer/controls'], function(composer, controls) {
		composer.addButton('fa fa-eye-slash', function(textarea, selectionStart, selectionEnd) {
			var prefix = '>! ';
			var title = '(Spoiler Title) ';
			if(selectionStart === selectionEnd){
				var text = 'Text';
				controls.insertIntoTextarea(textarea, prefix + title + text);
				controls.updateTextareaSelection(textarea, selectionStart + (prefix.length + title.length), selectionStart + (prefix.length + title.length + text.length));
			} else {
				controls.wrapSelectionInTextareaWith(textarea, prefix + title, '');
				controls.updateTextareaSelection(textarea, selectionStart + (prefix.length + title.length), selectionEnd + (prefix.length + title.length));
			}
		}, 'Spoiler');
		composer.addButton('fa fa-table', function(textarea, selectionStart, selectionEnd) {
			var sampleTable = '| Here\'s     |   a Sample        |  Table |\n'
				+'|---------------|-------------------------|------------|\n'
				+'| See         | this guide          | for       |\n'
				+'| more      | details on          | how     |\n'
				+'| to | make this look | good:  |\n\nhttps://www.markdownguide.org/extended-syntax/#tables';
			controls.insertIntoTextarea(textarea, sampleTable);
			controls.updateTextareaSelection(textarea, selectionStart, selectionStart + sampleTable.length);
		}, 'Table');
		composer.addButton('fa fa-align-center', function(textarea, selectionStart, selectionEnd) {
			var tag = '::';
			if(selectionStart === selectionEnd){
				var text = 'Centered Text';
				controls.insertIntoTextarea(textarea, tag + text + tag);
				controls.updateTextareaSelection(textarea, selectionStart + (tag.length), selectionStart + (tag.length + text.length));
			} else {
				controls.wrapSelectionInTextareaWith(textarea, tag, tag);
				controls.updateTextareaSelection(textarea, selectionStart + (tag.length), selectionEnd + (tag.length));
			}
		}, 'Center Align');
		composer.addButton('fa fa-align-right', function(textarea, selectionStart, selectionEnd) {
			var prefix = ':';
			var suffix = '::';
			if(selectionStart === selectionEnd){
				var text = 'Right-aligned Text';
				controls.insertIntoTextarea(textarea, prefix + text + suffix);
				controls.updateTextareaSelection(textarea, selectionStart + (prefix.length), selectionStart + (prefix.length + text.length));
			} else {
				controls.wrapSelectionInTextareaWith(textarea, prefix, suffix);
				controls.updateTextareaSelection(textarea, selectionStart + (prefix.length), selectionEnd + (prefix.length));
			}
		}, 'Right Align');
	});
});
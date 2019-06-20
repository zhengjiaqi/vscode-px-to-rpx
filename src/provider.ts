import * as vscode from 'vscode';
import { CssRpxProcess } from "./process";
import * as nls from 'vscode-nls';

// const localize = nls.loadMessageBundle();
const localize = nls.config({ messageFormat: nls.MessageFormat.both})();


export class CssRpxProvider implements vscode.CompletionItemProvider {

    constructor(private process: CssRpxProcess) { }

    provideCompletionItems (document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Thenable<vscode.CompletionItem[]> {

        return new Promise((resolve, reject) => {
			
			let wordAtPosition = document.getWordRangeAtPosition(position);
			var currentWord = '';
			if (wordAtPosition && wordAtPosition.start.character < position.character) {
				var word = document.getText(wordAtPosition);
				currentWord = word.substr(0, position.character - wordAtPosition.start.character);
			}
            const res = this.process.convert(currentWord);
            if (!res) {
                return resolve([]);
            }
            
            const item = new vscode.CompletionItem(`${res.pxValue}px -> ${res.rpx}`, vscode.CompletionItemKind.Snippet);
            item.insertText = res.rpx;
            item.detail = 'Value';
            let message = localize('px2rpx.description', 'Translate $0px to $1, you can set design base width in preferences settings.');
            message = message.replace('$0', res.pxValue + '')
            message = message.replace('$1', res.rpx + '')
            item.documentation = `${message}`;

            // item.documentation = `${res.pxValue}px 转换为 ${res.rpx}, 可在首选项-设置中设置设计稿基准宽度。`
            return resolve([item]);

        });
    }
}
import * as vscode from 'vscode';
import { CssRpxProcess } from "./process";
import * as nls from 'vscode-nls';

// const localize = nls.loadMessageBundle();
const localize = nls.config({ messageFormat: nls.MessageFormat.both})();


export class TestProvider implements vscode.CompletionItemProvider {

    constructor() { }

    provideCompletionItems (document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Thenable<vscode.CompletionItem[]> {
        return new Promise((resolve, reject) => {
            const item = new vscode.CompletionItem('doc', vscode.CompletionItemKind.Snippet);
            const args = [{ a: true }];
			const stageCommandUri = vscode.Uri.parse(
			`command:doc?${encodeURIComponent(JSON.stringify(args))}`
			);
			const contents = new vscode.MarkdownString(`[Run it](${stageCommandUri})`);
			contents.isTrusted = true;
            item.documentation = contents;
			item.insertText = 'doc-test';
            return resolve([item]);
        });
    }
}
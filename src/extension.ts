// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
'use strict';
import * as vscode from 'vscode';
import { CssRpxProcess } from './process';
import { CssRpxProvider } from './provider';

let config = null;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    config = vscode.workspace.getConfiguration("px-to-rpx");
    const process = new CssRpxProcess(config);
    let provider = new CssRpxProvider(process);
    const LANS = ['html', 'vue', "swan", "wxml", "axml", 'css', "wxss", "acss", 'less', 'scss', 'sass', 'stylus', 'wxss', 'acss'];
    for (let lan of LANS) {
        let providerDisposable = vscode.languages.registerCompletionItemProvider(lan, provider);
        context.subscriptions.push(providerDisposable);
    }

    vscode.commands.registerTextEditorCommand('extension.px2rpx', (textEditor, edit) => {
        const doc = textEditor.document;
        const start = new vscode.Position(0, 0);
        const end = new vscode.Position(doc.lineCount - 1, doc.lineAt(doc.lineCount - 1).text.length);
        const selection = new vscode.Range(start, end);
        
        let text = doc.getText(selection);
        textEditor.edit(builder => {
            builder.replace(selection, process.convertAll(text));
        });
    });

    let disposable = vscode.commands.registerTextEditorCommand('extension.px2rpxInSelection', (textEditor, edit) => {
        const doc = textEditor.document;
        let selection: vscode.Selection | vscode.Range = textEditor.selection;
        if (selection.isEmpty) {
            const start = new vscode.Position(0, 0);
            const end = new vscode.Position(doc.lineCount - 1, doc.lineAt(doc.lineCount - 1).text.length);
            selection = new vscode.Range(start, end);
        }
        
        let text = doc.getText(selection);
        textEditor.edit(builder => {
            builder.replace(selection, process.convertAll(text));
        });
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}


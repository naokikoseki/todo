import { element } from "./html-util.js";

export class TodoItemView {
    /**
     * `todoItem`に対応するTodoアイテムのHTML要素を作成して返す
     * @param {TodoItemModel} todoItem
     * @param {function({id:string, completed: boolean})} onUpdateTodo チェックボックスの更新イベントリスナー
     * @param {function({id:string})} onDeleteTodo 削除ボタンのクリックイベントリスナー
     * @returns {Element}
     */
    createElement(todoItem, { onUpdateTodo, onDeleteTodo }) {
        const todoItemElement = todoItem.completed
            ? element`<li><input type="checkbox" class="checkbox" checked>
                                    <s>${todoItem.title}</s>
                                    
                                </li>`
            : element`<li><input type="checkbox" class="checkbox">
                                    ${todoItem.title}
                                    
                                </li>`;
        const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
        inputCheckboxElement.addEventListener("change", () => {
            // コールバック関数に変更
            onUpdateTodo({
                id: todoItem.id,
                completed: !todoItem.completed
            });
            onDeleteTodo({
              id: todoItem.id
          });
        });
        // 作成したTodoアイテムのHTML要素を返す
        return todoItemElement;
    }
}
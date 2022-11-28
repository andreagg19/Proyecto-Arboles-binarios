class Node{
    constructor(numero){
        this.numero=numero;
        this.rgtson=null;
        this.lftson=null;
    }
}

class BinaryTree{
    constructor(){
        this.root=null;
    }

    add(nuevo){
        if(this.root==null){
            this.root=nuevo;
        }else{
            this._addrec(nuevo, this.root);
        }
    }

    _addrec(nuevo,nodex){
        if(nuevo.numero<nodex.numero){
            if(nodex.lftson==null){
                nodex.lftson=nuevo;
            }else{
                this._addrec(nuevo, nodex.lftson);
            }
        }else{
                if (nodex.rgtson==null){
                    nodex.rgtson=nuevo
                }else{
                    this._addrec(nuevo, nodex.rgtson)
                }
            }
        }

    inorder(){
        if(this.root==null){
        console.log(".");
        }else{
            this._inOrder(this.root)
        }
    }

    _inOrder(nodex){
        if(nodex.lftson!=null){
            this._inOrder(nodex.lftson);
        }
        console.log(nodex.numero);
        if(nodex.rgtson!=null){
            this._inOrder(nodex.rgtson);
        }
    }

    operator(sign, nodee, nodeee){
        while (sign==='+') {
            return nodee+nodeee;
        }
        while (sign==='-') {
            return nodee-nodeee;
        }
        while (sign==='*') {
            return nodee*nodeee;
        }
        while (sign==='/') {
            return nodee/nodeee;
        }
    }

}

let tree=new BinaryTree();
let node=new Node(4);
tree.add(node);
node=new Node('+');
tree.add(node);
node=new Node(5);
tree.add(node);
node=new Node('-');
tree.add(node);
node=new Node(6);
tree.add(node);
node=new Node('/');
tree.add(node);
node=new Node(2);
tree.add(node);
node=new Node('*');
tree.add(node);
node=new Node(7);
tree.add(node);
console.log(tree.inorder());

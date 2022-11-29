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

        preOrder(){
        let aux=[];
        let pre=[];
        for (let i=pre.length-1; i>=0; i--) {
            if (!isNaN(pre[i])) {
                aux.push(Number(pre[i]));
            }
        let nodex1=aux.pop();
        let nodex2=aux.pop();
        let result=this.operator(pre[i], nodex1, nodex2)
        aux.push(result);
        }
        return aux.pop();
    }

    postOrder(){
        let aux=[];
        let post=[];
        for (let j=0; i<post.length; j++) {
            if (!isNaN(post[j])) {
                aux.push(Number(post[j]));
            }
        let nodex1=aux.pop();
        let nodex2=aux.pop();
        let result=this.operator(post[j], nodex1, nodex2)
        aux.push(result);
        }
        return aux.pop();
    }

    }


let tree=new BinaryTree();
let node=new Node(3);
tree.add(node);
node=new Node('*');
tree.add(node);
node=new Node(9);
tree.add(node);
node=new Node('-');
tree.add(node);
node=new Node(6);
tree.add(node);
node=new Node('*');
tree.add(node);
node=new Node(3);
tree.add(node);
node=new Node('/');
tree.add(node);
node=new Node(2);
tree.add(node);
node=new Node('+');
tree.add(node);
node=new Node(3);
tree.add(node);
node=new Node('*');
tree.add(node);
node=new Node(6);
tree.add(node);
node=new Node('+');
tree.add(node);
node=new Node(5);
tree.add(node);
node=new Node('*');
tree.add(node);
node=new Node(4);
tree.add(node);
node=new Node('/');
tree.add(node);
node=new Node(2);
tree.add(node);
console.log(tree.inorder());
console.log(tree.preOrder('+','-','*',3,9,/,'*',6,3,2,'+','*',3,6,/,'*',5,4,2));
console.log(tree.postOrder(3,9,'*',6,3,'*',2,'/','-',3,6,'*',5,4,2,'/','+','+'));

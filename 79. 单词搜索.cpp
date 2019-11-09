class Solution {
public:
    vector<vector<char>> alphas;
    bool vest[1001][1001]={false};
    // 四个方向：右左下上
    int go[4][2]={0,1,0,-1,1,0,-1,0};
    string target;
    bool res;
    int rows,columns;
    bool exist(vector<vector<char>>& board, string word) {
        rows=board.size();columns=board[0].size();
        alphas=board;target=word;
        for(int i=0;i<1001;i++){
            for(int j=0;j<1001;j++){
                vest[i][j]=false;
            }
        }
        res=false;
        for(int i=0;i<rows;i++){
            for(int j=0;j<columns;j++){
                if(alphas[i][j]==target[0]){
                    vest[i][j]=true;
                    DFS(i,j,1);
                    vest[i][j]=false;
                }   
            }
        }
        return res;
    }
    void DFS(int x,int y,int index){
        
        if(index==target.length())
            res=true;
        for(int i=0;i<4;i++){
            int nx=x+go[i][0];int ny=y+go[i][1];
            // 剪枝
            if(nx<rows&&nx>=0&&ny<columns&&ny>=0&&!vest[nx][ny]&&alphas[nx][ny]==target[index]){
                vest[nx][ny]=true;
                DFS(nx,ny,index+1);
                vest[nx][ny]=false;
            }
        }
        
    }
};

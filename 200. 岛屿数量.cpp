class Solution {
public:
    bool vest[1001][1001];
    int go[4][2]={0,1,0,-1,1,0,-1,0};
    int rows,columns;
    vector<vector<char>> G;
    int numIslands(vector<vector<char>>& grid) {
        if(grid.size()==0){
            return 0;
        }
            
        fill(vest[0],vest[0]+1001*1001,false);
        G=grid;
        int cnt=0;
        rows=grid.size();
        columns=grid[0].size();    
        for(int i=0; i<rows; i++){
            for(int j=0; j<columns; j++){
                //挑选未被遍历的矩阵块的起点
                if(grid[i][j]=='1'&&vest[i][j]==false)
                {
                    cnt++;
                    DFS(i,j);
                }
            }
        }
        return cnt;
    }
    void DFS(int x,int y){
        vest[x][y]=true;
        for(int i=0; i<4; i++)
        {
            int nx=x+go[i][0];
            int ny=y+go[i][1];

            if(nx>=0&&nx<rows&&ny>=0&&ny<columns&&vest[nx][ny]==false&&G[nx][ny]=='1')
                DFS(nx,ny);
        }
    }
};

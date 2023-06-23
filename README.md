### Importing Libraries

    import numpy as np 
    import pandas as pd
### Taking Input CSV
```python
# the Low memory option is set to ensure it takes in all values as the Books have mixed data type in some fields
books = pd.read_csv('Books.csv',low_memory=False)
users = pd.read_csv('Users.csv')
rating = pd.read_csv('Ratings.csv')
```
### Basic Data Exploration Operations

```
print(books.shape)
rating.isnull().sum()
users.duplicated().sum()
```
## Popularity based
```
# we are merging two csv on the ISBN no 
mergeddf = rating.merge(books, on='ISBN')
```
```
mergeddf.shape
```
### Grouping no of rating with book name
```
num_rating_df = mergeddf.groupby('Book-Title').count()['Book-Rating'].reset_index()
```
### Getting the number of ratings done on each books
```
num_rating_df.rename(columns={"Book-Rating":"num_Rating"},inplace=True)
num_rating_df.head()
```
### Doing the same operation except this time with avg rating
```
avg_rating_df = mergeddf.groupby('Book-Title').mean()['Book-Rating'].reset_index()
avg_rating_df.rename(columns={"Book-Rating":"avg_Rating"},inplace=True )
avg_rating_df.head()
```
### Merging both the data frame 
```
popular_df = num_rating_df.merge(avg_rating_df, on='Book-Title')
popular_df.head()
```
```
popular_df = popular_df[popular_df['num_Rating']>=250].sort_values('avg_Rating',ascending=False).head(50)
popular_df = popular_df.merge(books,on='Book-Title').drop_duplicates('Book-Title')[['Book-Title','Book-Author','Year-Of-Publication','Image-URL-M','avg_Rating']]
popular_df
```
## Collaborative approach
### Here we are considering only those user who have  rated more than 200 books
```
x = mergeddf.groupby('User-ID').count()['Book-Rating'] > 200
padhe_like_user = x[x].index
```
```
filtered_rating = mergeddf[mergeddf['User-ID'].isin(padhe_like_user)]
```
### Now we considering books that have more than 50 rating
```
y = filtered_rating.groupby('Book-Title').count()['Book-Rating'] >= 50
famous_books = y[y].index
```
```
final_rating = filtered_rating[filtered_rating['Book-Title'].isin(famous_books)]
```
### Formatting table according to Need
```
pt = final_rating.pivot_table(index='Book-Title',columns='User-ID',values='Book-Rating')
pt.fillna(0,inplace=True)
pt
```
```
from sklearn.metrics.pairwise import cosine_similarity
```
### Calculating the cosine distance between user for each book 
```
simlarity_score = cosine_similarity(pt)
print(simlarity_score)
```
### Creating a function to Recommend Books
```
def recomend(book_name):
    index = np.where(pt.index == book_name )[0][0]
    similar_items = sorted(list(enumerate(simlarity_score[index])),key=lambda x:x[1],reverse=True)[1:8]
    for i in similar_items:
        print(pt.index[i[0]])
```


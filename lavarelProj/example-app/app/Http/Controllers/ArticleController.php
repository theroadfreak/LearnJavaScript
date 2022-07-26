<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Models\Article;
use App\Http\Resources\Article as ArticleResource;


class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        //Get articles  
        $articles = Article::paginate(15);
       
        //return colection of articles as resource
        return ArticleResource::collection($articles);    
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //$article = $request->isMethod('put') ? Article::findOrFail($request->article_id) : new Article;

        if ($request->isMethod('put')) {
            $article = Article::findOrFail($request->article_id);
            $article->title = $request->title;
            $article->body = $request->body;
            $article->save();
            return new ArticleResource($article);

        }else{
            $article = new Article;
            
            // $validated = $request->validate([
                //     'title' => 'required',
                //     'body' => 'required'
        // ]);

            //Article::query()->create([$request->title, $request->body]);
          
            // $article = new Article;
            // $article->title = $request->title;
            // $article->body =  $request->body;
            // $article->save();

            $article = Article::create(['title'=>$request->title , 'body'=>$request->body]);
            
            // if($article->save()) {
            return new ArticleResource($article);
            // }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)   
    {
        if ($id == 1){
            $id = 2;
            //Get article
            $article = Article::findOrFail($id);
            //return single article as resource 
            return new ArticleResource($article); 
        }else{
            //Get article
            $article = Article::findOrFail($id);
            //return single article as resource 
            return new ArticleResource($article);
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //Get articles  
        if ($id == 1){
            $id = 2;
            //Get article
            $article = Article::findOrFail($id);
            //return single article as resource 
            return new ArticleResource($article); 
        }else{
            //Get article
            $article = Article::findOrFail($id);
            //return single article as resource 
            if ($article->delete()){
               return new ArticleResource($article);
            }
        } 
    }
    }


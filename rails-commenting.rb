# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# Application Controller is the Parent Class and the BlogPostController is a Child Class.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # posts is an instance variable, BlogPost is the class name, and the .all is stating we want to see all posts in the database.
    @posts = BlogPost.all
  end

  # ---3)
  # Were defining show which is a controller action. post is the instance variable. BlogPost is the class, and were finding a specific blog by the id.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # Were defining new which is a controller action. post is the instance variable. BlogPost is the class and the .new is giving the instance variable the ability to be viewed?
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # We saying the instance variable = our class and were going to create a post using the blog posts params. Then we have a conditional that reads like " is this post valid, if it is than redirect it to the path of creating."
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # Were finding a specific post using the id or primary key and were able to edit the post
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # Similar to the create we doing the same thing, but this one were updating the post. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # Were redirecting the blog post path once it's been defined and we know what were doing. In this case we are destorying the blog post at a certain id. 
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # This creates a layer of protection for everything below the words "private", meaning anything below cannot be called upon. 
  private
  def blog_post_params
    # ---10)
    # I believe we are stating that if something wants to be passed we must require the params to have a blog post attached long with the title an content of that blog post.
    params.require(:blog_post).permit(:title, :content)
  end
end

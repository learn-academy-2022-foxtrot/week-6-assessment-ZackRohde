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
    # 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      redirect_to blog_posts_path
    end
  end

  # ---9)
  private
  def blog_post_params
    # ---10)
    params.require(:blog_post).permit(:title, :content)
  end
end

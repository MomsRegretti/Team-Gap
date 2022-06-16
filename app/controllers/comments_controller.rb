class CommentsController < ApplicationController
    def index
        render json: Comment.all, status: :ok
    end

    def show
        comment = Comment.find_by!(params[:id]) 
        render json: comment, status: :ok
    end
    
    def create 
        # check to see if map is in database
        # map = Map.find_by(uuid: params[:uuid])
        # if yes, just append a comment to that map, render json: comment
        # if map
            
            map = Map.find_by(displayName: params[:map][:displayName])
            
            if map != nil
                # # changing params object
                params[:map_id] = map.id
                params[:user_id] = current_user.id
                comment = Comment.create!(comment_params)

                # # inputting all of the key value pairs, not using comment_params
                # comment = Comment.create!(map_id: map.id, user_id: current_user.id, body: params[:body], category: params[:category])
                render json: comment, status: :created
            elsif map == nil
                m1 = Map.new(uuid: params[:map][:uuid], displayName: params[:map][:displayName], splash: params[:map][:splash], listViewIcon: params[:map][:listViewIcon])
                m1.save
                comment = Comment.create!(map_id: m1.id, user_id: current_user.id, body: params[:body], category: params[:category])
                render json: comment, status: :created
            end

        # # else, create new map instance from this passed map object, THEN append comment and render json: comment
        # else
        # m1 = Map.new(uuid: params[:map][:uuid], displayName: params[:map][:displayName], splash: params[:map][:splash], listViewIcon: params[:map][:listViewIcon])
        #     newmap = Map.create!(map_params)
        #     comment = Comment.create!(comment_params)
        #     render json: comment, status: :created
        # end
    end

    def update
        comment = find_comment
        comment.update!(comment_params)
        render json: comment, status: :ok
    end

    def destroy
        comment = find_comment
        comment.destroy
        head :no_content
    end

    private

    def find_comment
        Comment.find(params[:id])
    end

    def map_params
        params.permit(:uuid, :displayName, :splash)
    end

    def comment_params
        params.permit(:body, :category, :map_id, :user_id)
    end
end

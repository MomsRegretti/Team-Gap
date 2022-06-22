class MapsController < ApplicationController

    def index
        render json: Map.all, status: :ok
    end

    def mapclick
        map = Map.find_by(displayName: params[:map][:displayName])
        if map
            render json: map, status: :ok
        elsif !map
            m1 = Map.create(uuid: params[:map][:uuid], displayName: params[:map][:displayName], splash: params[:map][:splash], listViewIcon: params[:map][:listViewIcon])
            m1.addagents
            render json: m1, status: :ok
        end
    end

    def usermaps
        chavo = current_user
        # byebug
        mijo = chavo.maps.uniq
        render json: mijo, status: :ok
    end

    def show
        map = Map.find_by!(uuid: params[:id])
        if map
            render json: map, status: :ok
        else
            render json: {}, status: :not_found
        end
    end

    def create
        map = Map.create!(map_params)
        render json: map, status: :created
    end

    private
    def map_params
        params.permit(:uuid, :splash, :listViewIcon, :displayName)
    end
end

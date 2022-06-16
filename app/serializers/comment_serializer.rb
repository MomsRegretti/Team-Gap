class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :category, :user_id, :map_id
end

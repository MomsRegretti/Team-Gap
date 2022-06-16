class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :category
end

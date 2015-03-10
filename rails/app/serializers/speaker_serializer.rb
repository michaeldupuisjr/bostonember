class SpeakerSerializer < ActiveModel::Serializer
  embed :ids, include: true
  has_many :presentations

  attributes :id, :name
end

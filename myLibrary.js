function collide(object1, object2) {
    bulletRightEdge = object1.x + object1.width;
    wallLeftEdge = object2.x;
    if (bulletRightEdge >= wallLeftEdge) {
        return true;
    }
    return false;
}
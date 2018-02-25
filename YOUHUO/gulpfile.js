// var gulp = require('gulp');
// var uglify = require('gulp-uglify');
// gulp.task('minijs',function(){
//     //执行的操作
//     gulp.src('./js/cart.js')  //要压缩的目录
//     .pipe(uglify())   //执行压缩gulp
//     .pipe(gulp.dest('dist/js'));   //输出的目录	
    
// })
var obj = {
    removeComments: true,//清除HTML注释
    collapseWhitespace: true,//压缩HTML
    collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    minifyJS: true,//压缩页面JS
    minifyCSS: true//压缩页面CSS
};
var gulp = require('gulp');	
var htmlmin = require('gulp-htmlmin');
gulp.task('htmlTask',function(){
    //执行的操作
    gulp.src('*.html')  //要压缩的目录
    .pipe(htmlmin(obj))   //执行压缩gulp
    .pipe(gulp.dest('dist'))  //输出的目录	
    
    
})
gulp.task('default',['htmlTask']);
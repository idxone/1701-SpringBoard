package bean;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

@Controller
public class SpringBoardController {
	BoardDao dao;
	String uploadPath = "C:/workspace/1701-SpringBoard/WebContent/upload/";
	int maxsize = 1024*1000;
	String encoding = "UTF-8";
	
	public SpringBoardController(BoardDao dao){
		this.dao=dao;
	}
	@SuppressWarnings("finally")
	@RequestMapping(value="list.do", method={RequestMethod.GET,RequestMethod.POST})
	public Object list(BoardVo vo){
		ModelAndView mv = new ModelAndView();
		try{
			mv.setViewName("list");
		}catch (Exception e) {
			e.printStackTrace();
		}finally {
			return mv;
		}
	}
	
	
	@RequestMapping(value="input.do", method={RequestMethod.POST})
	public Object input(BoardVo vo, HttpServletRequest req){
		ModelAndView mv = new ModelAndView();
		mv.setViewName("input");
		return mv;
	}
	
	@SuppressWarnings("finally")
	@RequestMapping(value="inputR.do",method={RequestMethod.POST})
	public Object inputR(BoardVo vo, HttpServletRequest req){//폼태그가 enctype이면 다이렉트로 안됨
	    List<String> attFiles=new ArrayList<String>();
		Enumeration<String> files = null;
		ModelAndView mv = new ModelAndView();
		MultipartRequest mul = null;
		BoardVo v = new BoardVo();
		
		try {
			mul = new MultipartRequest(req, uploadPath, maxsize, encoding, new DefaultFileRenamePolicy());
			v.setWorker(mul.getParameter("worker"));
			v.setSubject(mul.getParameter("subject"));
			v.setContent(mul.getParameter("content"));
			files=mul.getFileNames();
			
			while(files.hasMoreElements()){
				String file1 = files.nextElement();
				if(mul.getFilesystemName(file1)==null){
					continue;
				}
				attFiles.add(mul.getFilesystemName(file1));
			}
			
			v.setAttfile(attFiles);
			String vv = dao.input(v);
			mv.addObject("msg", vv);
			mv.setViewName("input_result");
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			return mv;
		}
	}
}
